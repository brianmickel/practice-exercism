class Allergies(object):

    def __init__(self, score):
        self._score = score
        self._allergens = [allergen for idx, allergen in enumerate(potential_allergens) if (score&potential_allergens_bitflags[allergen])>>idx]

    def is_allergic_to(self, item):
        return item in self.lst

    @property
    def lst(self):
        return self._allergens

potential_allergens_bitflags = {"eggs": 0b00000001,
                        "peanuts": 0b00000010,
                        "shellfish": 0b00000100,
                        "strawberries": 0b00001000,
                        "tomatoes": 0b00010000,
                        "chocolate": 0b00100000,
                        "pollen": 0b01000000,
                        "cats": 0b10000000}
potential_allergens = ["eggs",
                        "peanuts",
                        "shellfish",
                        "strawberries",
                        "tomatoes",
                        "chocolate",
                        "pollen",
                        "cats"]
        
