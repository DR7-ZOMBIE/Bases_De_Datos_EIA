#from config import URL
from pymongo import MongoClient
from functions import *

if __name__ == '__main__':
    client = MongoClient('mongodb://localhost:27017')
    database = client['test']
    collection = database['test']
    options = {
        'a':create_user,
        'b':get_user,
        'c':delete_user,
        'd':update_user
    }

    while True:
        for key,function in options.items():
            print(function.__doc__)
        option = input('Seleccione una opción: ').lower()
        if option == 'q':
            break
        function_selected = options.get(option)
        function_selected(collection)