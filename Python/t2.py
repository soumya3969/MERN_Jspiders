def categorize_list_data(list_data): 
    for integer in list_data :
        if integer < 0: 
            print("negative") 
        if integer > 0 and integer % 3 == 0 and integer % 7 == 0: 
            print("both") 
        if integer > 0 and integer % 3 == 0: 
            print("thirds") 
        if integer > 0 and integer % 7 == 0: 
            print("sevens") 
        else: print(integer) 
list_data = [1, 2, 3, 4, 5, 6, 7, 21, 42, 14, 26, 35, 36, 98, 9] 
categorize_list_data(list_data)