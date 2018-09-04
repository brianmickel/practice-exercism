class Allergies(object):

    def __init__(self, score):
        binary_score = bin(score)
        bit_array = [(score >> bit) & 1 for bit in [7,6,5,4,3,2,1,0]]
        is_allergen_array = list(reversed(bit_array))
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
        
