#! /usr/bin/python2.7

def count():
	fs = []
	for i in range(1,4):
		f = lambda i: lambda: i*i
		fs.append(f(i))
	return fs
