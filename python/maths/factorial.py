#!/usr/bin/env/ python
a = int(input())

def f(n):
	while (n>1):
		return (n * f(n-1))
	return 1

print(f(a))