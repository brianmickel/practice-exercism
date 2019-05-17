// Package hamming provides a function for calculating Hamming difference between two strings.
package hamming

import (
	"errors"
)

// Distance calculates the Hamming difference between two strings.
func Distance(a, b string) (int, error) {
    aRunes := []rune(a)
    bRunes := []rune(b)
    if len(aRunes) != len(bRunes) {
		return 0, errors.New("length mismatch")
	}
	diffCount := 0
	for i := range aRunes {
		if aRunes[i] != bRunes[i] {
			diffCount++
		}
	}
	return diffCount, nil
}
