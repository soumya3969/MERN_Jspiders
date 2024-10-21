# *         Soumya@123
Psw='oa1dfgHh23'
n=Psw.count
print(n)

if len(Psw)>8:
    capital=False
    small=False
    number=False
    symbol=False
    symbol="!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?"
    
    for char in Psw:
        if char.isupper():
         capital=True
        elif char.islower():
            small=True
        elif char.isdigit():
            number=True
        elif char in symbol:
            symbol=True
    
    if capital != True:
        print('Password must contain at least 1 Capital letter')
    if small != True:
        print('Password must contain at least 1 Small letter')
    if number != True:
        print('Password must contain at least 1 Number')
    if symbol != True:
        print('Password must contain at least 1 Symbol')
    

    if number == True and capital == True and number == True and symbol==True:
        print('Password is correct')                        
else:
    print('Password Must contain 8 char')