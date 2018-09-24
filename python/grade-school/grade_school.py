class School(object):
    def __init__(self):
        self.students = []

    def add_student(self, name, grade):
        self.students.append((grade, name))
        self.students = sorted(self.students)

    def roster(self):
        return [r[1] for r in self.students]

    def grade(self, grade_number):
        return [r[1] for r in self.students if r[0]==grade_number]
