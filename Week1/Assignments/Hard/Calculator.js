class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(num) {
      this.result += num;
      return this;
    }
  
    subtract(num) {
      this.result -= num;
      return this;
    }
  
    multiply(num) {
      this.result *= num;
      return this;
    }
  
    divide(num) {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.result /= num;
      return this;
    }
  
    clear() {
      this.result = 0;
      return this;
    }
  
    getResult() {
      return this.result;
    }
  
    calculate(expression) {
      const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove spaces
      const isValidExpression = /^[0-9+\-*/().]+$/g.test(sanitizedExpression);
  
      if (!isValidExpression) {
        throw new Error("Invalid expression");
      }
  
      try {
        // Use eval to calculate the result from the expression
        this.result = eval(sanitizedExpression);
      } catch (error) {
        throw new Error("Error in evaluating the expression");
      }
  
      return this;
    }
  }