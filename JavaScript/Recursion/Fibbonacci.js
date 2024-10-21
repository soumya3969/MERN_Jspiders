function fibonacci(n) { 
	if (n <= 1) { 
		return n; 
	} 
	return fibonacci(n - 1) + fibonacci(n - 2); 
} 


n = 5
// console.log(fibonacci(n))
for (let i = 0; i < n; i++) { 
	console.log(fibonacci(i)); 
};
