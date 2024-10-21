def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def is_emirp(n):
    if not is_prime(n):
        return False
    reversed_n = int(str(n)[::-1])
    if n == reversed_n:
        return False
    return is_prime(reversed_n)

# Example usage
number = int(input("Enter a number: "))
if is_emirp(number):
    print(f"{number} is an Emirp number.")
else:
    print(f"{number} is not an Emirp number.")