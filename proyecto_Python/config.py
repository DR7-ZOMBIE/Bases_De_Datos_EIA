from decouple import config

password = config('MONGO_PASSWORD', default='password')
URL = password