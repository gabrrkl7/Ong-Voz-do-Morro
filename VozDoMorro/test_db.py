import MySQLdb

try:
    db = MySQLdb.connect(
        host="localhost",
        user="ongvoz",
        passwd="@Ongvozdomorro7",
        db="voz_do_morro_sql"
    )
    print("Connection successful")
except MySQLdb.Error as e:
    print(f"Error connecting to MySQL: {e}")