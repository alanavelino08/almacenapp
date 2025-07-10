import sys
import os

# Añade el directorio del proyecto al path
sys.path.append(r'C:\fourscreens\backend')

# Configura la variable de entorno Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()