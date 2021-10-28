from requests.api import request
import googlemaps, time
import requests
from urllib.parse import urlencode
API_KEY = 'AIzaSyBVbm2--Kt86YJq_GtI83exlSS65B0E4B8'

# def get_client_ip(request):
#     x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
#     if x_forwarded_for:
#         ip = x_forwarded_for.split(',')[0]
#     else:
#         ip = request.META.get('REMOTE_ADDR')
#     return ip

# def get_location(ip):
#     res = request.get('http://ip-api.com/json'+ip)
#     loc = res.text
#     location = json.loads(loc)
#     latlon = (location.get('lat'), location.get('lon'))
#     return latlon

def get_location(alamat):
    params = {'address':alamat}
    params['key'] = API_KEY
    data_type = 'json'
    endpoint = f"https://maps.googleapis.com/maps/api/geocode/{data_type}"
    url_encode = urlencode(params)

    url = f"{endpoint}?{url_encode}"

    r = requests.get(url)
    if r.status_code not in range (200, 299):
        return {}
    else :
        return r.json()['results'][0]['geometry']['location']


def get_hospital(alamat):
    loc = get_location(alamat)
    latlon = (loc['lat'], loc['lng'])
    map_client = googlemaps.Client(API_KEY)
    location = latlon
    search_string = 'rumah sakit'
    distance = 5000
    business_list = []

    hasil = map_client.places_nearby(
        location = location,
        keyword = search_string,
        radius=distance,
        name='rumah sakit',
        language='bahasa indonesia',
        type='hospital',
    )

    business_list.extend(hasil.get('results'))
    next_page_token = hasil.get('next_page_token')

    while next_page_token:
        time.sleep(2)
        hasil = map_client.places_nearby(
            location = location,
            keyword = search_string,
            name='rumah sakit',
            radius=distance,
            page_token = next_page_token
        )
        business_list.extend(hasil.get('results'))
        next_page_token = hasil.get('next_page_token')

    return business_list