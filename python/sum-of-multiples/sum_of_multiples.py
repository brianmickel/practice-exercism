def sum_of_multiples(limit, multiples):
    multiplied_values = set()
    for m in multiples:
        multiplied_values.update(range(0,limit,m))
    overall_sum = sum(multiplied_values)
    return overall_sum
