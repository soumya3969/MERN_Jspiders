def printEvenNo(start, end):
  
    # Base case to stop recursion
    if start > end:
        return
    
    if start % 2 == 0:
        print(start)
    
    # Recursive call
    printEvenNo(start + 1, end)


start=-1
end=-20
# if(start>end):
#     start=start+end
#     end=start-end
#     start=start-end

printEvenNo(start,end)