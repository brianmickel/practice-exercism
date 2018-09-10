def sum_of_multiples(limit, multiples):
   return sum([x for x in range(0,limit) if divisible_by(x, multiples)])

def divisible_by(x, multiples):
    for m in multiples:
        if x%m==0:
            return True
    return False
