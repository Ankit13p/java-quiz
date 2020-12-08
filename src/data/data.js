const questionsList = [
    {
        "id" : 1,
        "description" : ["public class Test {",
                         "public static void main(String[] args) {", 
                         "System.out.println(\"\" + 2 + 'c' + true);", 
                        "}", "}"],
        "options":{
            "a": "2 c true",
            "b": "2ctrue",
            "c": "Exception Occur",
            "d": "Compilation Failed"
            },
        "correct": "b",
        "hint" : "Plus(+) can be operated as addition for two numeric values otherwise it will be work as a String concatination. So, here + will be work as a concatination. That's why answer is 2ctrue."
      
    },
    {
        "id" : 2,
        "description" : ["public abstract class Test {",
                         " public abstract void m() {};",
                          "}"],
                        
                          
                        
        "options":{
            "a": "Run Sucesssfully",
            "b": "Run-time Exception",
            "c": "Exception Occur",
            "d": "Compilation Failed"
            },
        "correct": "d",
        "hint" : "abstract method does not support method definition .That's why answer is Compilation Failed."

      
    }
]
export default questionsList;