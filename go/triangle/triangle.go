// Package triangle provides functions to determine triangle type and validity.
package triangle

import (
	"math"
	"sort"
)

type Kind string

const (
	NaT = "NaT" // not a triangle
	Equ = "Equ" // equilateral
	Iso = "Iso" // isosceles
	Sca = "Sca" // scalene
)

// IsValidLength determines if a value is a proper length value.
func IsValidLength(v float64) bool {
    if !(v > 0) || math.IsInf(v, 1) {
        return false
    }
    return true
}

// KindFromSides determines triangle kind.
func KindFromSides(a, b, c float64) Kind {
	if !IsValidLength(a) || !IsValidLength(b) || !IsValidLength(c) {
        return NaT
	}

	if a == b && b == c {
		return Equ
	}

	sides := []float64{a, b, c}
	sort.Float64s(sides)
	if sides[0]+sides[1] < sides[2] {
		return NaT
	}

	if sides[0] == sides[1] || sides[1] == sides[2] {
		return Iso
	}

	return Sca
}
