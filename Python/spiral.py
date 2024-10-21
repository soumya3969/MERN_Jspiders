def spiral_pattern(N):
    matrix= [[0]*N for _ in range(N)]
    
    #calculate the mid point of the matrix
    mid = N//2 -1 if N%2==0 else N//2
    num=1
    
    #directions: right, down, left, up
    directions=[(0,1),(1,0),(0,-1),(-1,0)]
    current_direction=0
    
    row ,col =mid,mid
    
    #fill the matrix in spiral order
    for step in range(1,N*N+1):
        matrix[row][col]=num
        num+=1
        
        #move in the current direction
        next_row, next_col =( 
            row+directions[current_direction][0],
            col+directions[current_direction][1]
        )
        
        #check if we need to change direction
        if(
            next_row<0
            or next_row>=N
            or next_col<0
            or next_col>=N
            or matrix[next_row][next_col]!=0
        ):
            current_direction=(current_direction+1)%4
            next_row, next_col = (
                row+directions[current_direction][0],
                col+directions[current_direction][1]
            )
        #update row and col to the new position
        row, col = next_row, next_col
        
    for row in matrix:
        print(" ".join(f"{x:2}" for x in row))
        

N=4

spiral_pattern(N)