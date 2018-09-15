def sum_of_multiples(limit, multiples):
    multiplied_values = set()
    for m in multiples:
        multiplied_values.update(range(m,limit,m))
    return sum(multiplied_values)