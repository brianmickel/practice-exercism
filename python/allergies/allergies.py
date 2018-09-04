class Allergies(object):

    def __init__(self, score):
        binary_score = bin(score)
        is_allergen_array = list(reversed([(score >> bit) & 1 for bit in range(8 - 1, -1, -1)]))
        potential_allergens = ["eggs",
                                "peanuts",
                                "shellfish",
                                "strawberries",
                                "tomatoes",
                                "chocolate",
                                "pollen",
                                "cats"]
        result = [pa for pa, ia in zip(potential_allergens, is_allergen_array) if ia]
        print(result)
        self._allergens = result

    def is_allergic_to(self, item):
        return item in self.lst

    @property
    def lst(self):
        return self._allergens
        
