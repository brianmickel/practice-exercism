def sum_of_multiples(limit, multiples):
    multiplied_values = set()
    for m in multiples:
        max_val_coeff = int((limit-1)/m)
        for i in range(1,max_val_coeff+1):
            multiple_value = i*m
            multiplied_values.add(multiple_value)
    overall_sum = sum(multiplied_values)
    return overall_sum
