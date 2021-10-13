web: gunicorn covid19_panic_button.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
manage.py migrate