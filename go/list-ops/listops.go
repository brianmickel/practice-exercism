package listops

type binFunc func(x, y int) int;
type predFunc func(n int) bool;
type unaryFunc func(x int) int;

type IntList []int;
func (l *IntList) Length() IntList {
	return *l;
}

func (l *IntList) Reverse() IntList {
	return *l;
}

func (l *IntList) Append(list IntList) IntList {
	return *l;
}

func (l *IntList) Concat(lists []IntList) IntList {
	return *l;
}

func (l *IntList) Foldr(f binFunc, i int) int {
	return i;
}

func (l *IntList) Foldl(f binFunc, i int) int {
	return i;
}

func (l *IntList) Map(f unaryFunc) IntList {
	return *l;
}