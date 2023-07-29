import base64

known = "security+"
cipher = base64.b64decode("w7rDrMOqw7zDu8Ogw73DsMKiw7LDq8K4w7rCvcOWw6TCvcOnw7zCvcOlw5bDusK4w6HDtA==".encode()).decode()

key = ""

for i in range(256):
  flag = ""
  for j in cipher:
    flag += chr(ord(j) ^ 3)
  print(flag,i)
