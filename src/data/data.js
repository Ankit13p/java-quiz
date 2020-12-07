const questionsList = [
    {
        "id" : 1,
        "description" : ["public class Test {",
                         "public static void main(String[] args) {", 
                         "System.out.println(\" \" + 2 + 'c' + true)", 
                        "}", "}", "}"],
        "options":{
            "a": "2 c true",
            "b": "2ctrue",
            "c": "Exception Occur",
            "d": "Compilation Failed"
            },
        "correct": "2ctrue"
      
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
        "correct": "Compilation Failed"
      
    }
]
export default questionsList;