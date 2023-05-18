numbers = [1,35,64355,2,643,23]
def maximum(numbers):
    max = 0
    for number in numbers:
        if number > max:
            max = number
    return max

