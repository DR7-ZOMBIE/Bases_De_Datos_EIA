def create_user(collection):
    """
    A) Crear usuario
    """
    username = input('Ingrese el nombre de usuario: ')
    edad = input('Ingrese la edad del usuario: ')
    email = input('Ingrese el email del usuario: ')
    user = dict(username=username,edad=edad,email=email)

    collection.insert_one(user)

def get_user(collection):
    """
    B) Obtener usuario
    """

    username = input('Ingrese el nombre de usuario: ')
    user=collection.find_one({'username':username},{'_id':0})
    print(user)

def delete_user(collection):
    """
    C) Eliminar usuario
    """
    print('Eliminando usuario')

def update_user(collection):
    """
    D) Actualizar usuario
    """

    print('Actualizando usuario')

def default():
    print()