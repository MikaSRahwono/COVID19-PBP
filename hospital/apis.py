import os
from requests.api import request
import googlemaps, time
import requests
from urllib.parse import urlencode
# API_KEY = os.getenv('API_KEY')
API_KEY = 'AIzaSyBWPRHpD6NyeA6De7h-luDykavzpMmCt4Q'

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
    hospital_list = []

    hasil = map_client.places_nearby(
        location = location,
        keyword = search_string,
        radius=distance,
        name='rumah sakit',
        language='bahasa indonesia',
        type='hospital',
    )

    hospital_list.extend(hasil.get('results'))
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
        hospital_list.extend(hasil.get('results'))
        next_page_token = hasil.get('next_page_token')

    return hospital_list

def get_details(hospital_list):
    detail_lists = []
    photo_lists = []
    for hospital in hospital_list:
        try:
            if hospital['photos']:
                # params for hospital
                params = {'place_id':hospital['place_id']}
                params['key'] = API_KEY
                data_type = 'json'
                endpoint = f"https://maps.googleapis.com/maps/api/place/details/{data_type}"

                url_encode = urlencode(params)

                url = f"{endpoint}?{url_encode}"

                r = requests.get(url)
                z = r.json()['result']['photos'][1]['photo_reference']

                # params for photo
                params2 = {'maxwidth':320, 'maxheight':200}
                params2['photo_reference'] = z
                params2['key'] = API_KEY
                url_encode2 = urlencode(params2)
                endpoint_photo = f"https://maps.googleapis.com/maps/api/place/photo?{url_encode2}"
                if r.status_code not in range (200, 299):
                    detail_lists.append()
                    photo_lists.append()
                else :
                    detail_lists.append(r.json()['result'])
                    photo_lists.append(endpoint_photo)
        except:
            continue
    return detail_lists, photo_lists