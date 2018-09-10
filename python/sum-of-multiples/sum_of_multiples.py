# def sum_of_multiples(limit, multiples):
#    return sum([x for x in range(0,limit) if divisible_by(x, multiples)])

# def divisible_by(x, multiples):
#     for m in multiples:
#         if x%m==0:
#             return True
#     return False


def sum_of_multiples(limit, multiples):
    overall_sum = 0
    #generative
    multiples_tuples = {}
    for m in multiples:
        multiples_tuples[m] = int((limit-1)/m)
    print(multiples_tuples)
    multiplied = []
    for m in multiples:
        for i in range(1,multiples_tuples[m]+1):
            sum_value = i*m
            print(m,i,sum_value)
            if sum_value not in multiplied:
                overall_sum += sum_value
            multiplied.append(sum_value)
    return overall_sum
