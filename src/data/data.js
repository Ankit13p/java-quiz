
const questionsList = [
    {
        "id" : 1,
        "description" : ["public class Test {","public static void main(String[] args) {", "System.out.println(\"\" + 2 + 'c' + true);", "}", "}"],
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
    },
    {
        "id" : 3,
        "description" : ["class Test","{","public static void main(String[] args) {",
                         "{", "try{","main(args);","}catch(Exception e){",
                         "System.out.println(\"catch-in\");","}",
                         "System.out.println(\"no-try\");",
                         "}","}"],       
        "options":{
            "a": "catch-in",
            "b": "no-try",
            "c": "none of println statement are executed",
            "d": "Compilation error"
            },
        "correct": "c",
        "hint" : " main() will be executed in infinite loop and when memory usage rich out of capacity then StackOverflowError will be printed.That's why answer is none of println statement are executed."
    },
    {
        "id" : 4,
        "description" : ["class SpecialString{",
                                "String str;",
                                "SpecialString(String str){",
                                "this.str = str;",
                                "}",	
                            "}",
                            "class Test",
                            "{",
                                "public static void main(String[] args)",
                                "{",
                                    "System.out.println(new String(\"java\"));",
                                    "System.out.println(new StringBuilder(\"java\"));",
                                    "System.out.println(new SpecialString(\"java\"));",
                                "}",
                            "}"],
        "options":{
            "a": "java	java	java",
            "b": "java	java	<sometext containg @ symbol>",
            "c": "java	<sometext containg @ symbol>		<sometext containg @ symbol>",
            "d": "Compilation Error"
            },
        "correct": "b",
        "hint" : "String and StringBuilder has a toString() over-ride but SpecialString don’t have that’s why classname@hashcode in hexadecimal.That's why answer is java	java	<sometext containg @ symbol>."
    },
    {
        "id" : 5,
        "description" : ["public class Test {",
                         "public static void main(String[] args) {", 
                         "Boolean b1 = new Boolean(\"tRuE\");",
                         "Boolean b2 = new Boolean(\"fAlSe\");",
                         "Boolean b3 = null;",
                         "System.out.println(b1+\": \"+b2+\": \"+b3);",
                        "}", "}"],
        "options":{
            "a": "Compilation Failed",
            "b": "false:false:false",
            "c": "false:false:null",
            "d": "true:false:null"
            },
        "correct": "d",
        "hint" : "Boolean has a equalIgnoreCase() to validate passed string, b3 is a reference type so it can hold null as well. That's why answer is true:false:null."
    },
    {
        "id" : 6,
        "description" : ["public class Test {",
                    "private static void add(double d1, double d2)",
                    "{",
                        "System.out.println(\"double version:\"+(d1+d2));",
                    "}",
                    "private static void add(Double d1, Double d2)",
                    "{",
                        "System.out.println(\"Double version:\"+(d1+d2));",
                    "}",
                    "public static void main(String[] args)",
                    "{",
                        "add(10.0,null);",
                        "}", "}"],
        "options":{
            "a": "compiler error",
            "b": "an Exception is thrown an runtime",
            "c": "double version: 10.0",
            "d": "Double version: 10.0"
            },
        "correct": "b",
        "hint" : "auto-boxing will take 10.0 as a double d1 but null cannot be converted in to Double object so NullPointException. That's why answer is an Exception is thrown an runtime."
    },
    {
        "id" : 7,
        "description" : ["public class Test {",
                        "public static void main(String[] args){",
                        "int a =2;",
                        "boolean res = false;",
                        "res= a++==2 || --a==2 && --a==2;",
                        "System.out.println(a);",
                        "}", "}"],
        "options":{
            "a": "3",
            "b": "2",
            "c": "1",
            "d": "Compilation Error"
            },
        "correct": "a",
        "hint" : "first condition is true, for OR first condition is true then answer is true so other part will not execute and in first part a++ == 2 is true and then a value is incremented during that time so a=3 now. That's why answer is 3."
    },
    {
        "id" : 8,
        "description" : ["class Vehical{",
                            "public int getRegiNo()",
                                "{ return 1; }",
                        "}",
                        "class Car{",
                            "public int getRegiNo()",
                            "{  return 2;   }",
                        "}",
                        "class Test{",
                            "public static void main(String[] args){",
                                "Vehical obj = new Car();",
                                "System.out.println(obj.getRegiNo());",
                            "}",
                        "}"],
        "options":{
            "a": "Exception",
            "b": "2",
            "c": "1",
            "d": "Compilation Error"
            },
        "correct": "d",
        "hint" : "class Vehical and class Car dont have any relation.So, compiler will through error but if there was a relationship beetwen both classes then Answer would be 2. That's why currently answer is Compilation Error."
    },
    {
        "id" : 9,
        "description" : ["class Test{",
                                "private static void m1() throws Exception{",
                                "throw new Exception();",
                            "}",
                            "public static void main(String[] args){",
                            "try{",
                                "m1();",
                            "}finally{",
                                "System.out.println(\"a\");",
                            "}",
                            "}",
                        "}"],
        "options":{
            "a": "a print and close normally",
            "b": "a print and close abnormally",
            "c": "a print and print stack then close normally",
            "d": "Compilation Error"
            },
        "correct": "d",
        "hint" : "checked exception must be throws or have a handling code in try and catch block. That's why currently answer is Compilation Error. If main() was throws exception then answer would be c: a print and print stack then close normally"
    },
    {
        "id" : 10,
        "description" : ["import java.util.List;",
                        "import java.util.ArrayList;",
                        "class Test{",
                            "public static void main(String[] args){",	
                                "List<Integer> list = new ArrayList<>();",
                                "list.add(27);",
                                "list.add(27);",
                                "list.add(new Integer(27));",
                                "list.add(new Integer(27));",	
                                "System.out.println(list.get(0)==list.get(1));",	
                                "System.out.println(list.get(2)==list.get(3));",
                            "}",
                         "}"],
        "options":{
            "a": "false false",
            "b": "false true",
            "c": "true false",
            "d": "true true"
            },
        "correct": "c",
        "hint" : "auto-boxing will create object of primitive 27 number. while autoboxing first time Integer object is created with 27 value and in next time same object is available so it will not create new object but simply pointing to that object so first return true. while at index 2 and 3 the objects are created with new keyword so both are different objects.So, correct answer is true false"
    }
]
export default questionsList;









  






