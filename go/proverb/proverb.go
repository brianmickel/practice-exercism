// Package proverb contains a function that outputs a proverb.
package proverb

import (
	"fmt"
)

// Proverb outputs the proverb.
func Proverb(rhyme []string) []string {
	tmpl := "For want of a %s the %s was lost."
	tmplEnd := "And all for the want of a %s."
	var proverb []string
	if len(rhyme) == 0 {
		return proverb
	}
	for i := 0; i <= len(rhyme)-2 && len(rhyme) > 1; i++ {
		line := fmt.Sprintf(tmpl, rhyme[i], rhyme[i+1])
		proverb = append(proverb, line)
	}
	endLine := fmt.Sprintf(tmplEnd, rhyme[0])
	proverb = append(proverb, endLine)
	return proverb
}
