function numbers() {
    var number1 = 10;
    var number2 = 12.456;
    console.log("Number1 is 10")
    console.log("Number2 is 12.456");
    console.log("toString() method on number1: " + number1.toString());
    console.log("toExponential(2) method on number1: " + number1.toExponential(2));
    console.log("toFixed(2) method on number2: " + number2.toFixed(2));
    console.log("toPrecision(2) method on number2: " + number2.toPrecision(2));
    console.log("valueOf() method on number1: " + number1.valueOf());
    console.log("Number() method on boolean false: " + Number(false));
    console.log("Number() method on today's date: " + Number(new Date("2022-05-02")));
    console.log("parseInt() method on string 10: " + parseInt("10"));
    console.log("parseInt() method on string 10.2: " + parseInt("10.2"));
    console.log("parseInt() method on string abcd: " + parseInt("abcd"));
    console.log("parseFloat() method on string 10: " + parseFloat("10"));
    console.log("parseFloat() method on string 10.2: " + parseFloat("10.2"));
    console.log("parseFloat() method on string abcd: " + parseFloat("abcd"));
}

function strings() {
    var string1 = "abcd";
    var string2 = "ABCD";
    var string3 = "      abcd   ";
    var string4 = "a,b,c,d";
    console.log("String1 is abcd");
    console.log("String2 is ABCD");
    console.log("String3 is       abcd   ");
    console.log("String4 is a,b,c,d");
    console.log("length method on string1: " + string1.length);
    console.log("charAt(2) method on string1: " + string1.charAt(2));
    console.log("charCodeAt(2) method on string1: " + string1.charCodeAt(2));
    console.log("slice(1, 3) method on string1: " + string1.slice(1, 3));
    console.log("substring(0, 2) method on string1: " + string1.substring(0, 2));
    console.log("replace(\"a\", \"A\") method on string1: " + string1.replace("a", "A"));
    console.log("toUpperCase() method on string1: " + string1.toUpperCase());
    console.log("toLowerCase() method on string2: " + string1.toLowerCase());
    console.log("concat(string2) method on string1: " + string1.concat(string2));
    console.log("trim() method on string3: " + string3.trim());
    console.log("length of split(\",\") method result on string4: " + string4.split(",").length);
}

function booleans() {
    let boolean1 = true;
    let boolean2 = new Boolean(true);
    console.log("Boolean1 is true");
    console.log("Boolean2 is true");
    console.log("Boolean(10 > 5) method: " + Boolean(10 > 5));
    console.log("Boolean(0) method: " + Boolean(0));
    console.log("Boolean(abc) method: " + Boolean("abc"));
    console.log("boolean1 == boolean2: " + (boolean1 == boolean2));
    console.log("boolean1 === boolean2: " + (boolean1 === boolean2));
}

function nulls() {
    let null1 = null;
    console.log("Null1 is null");
    console.log("Number(null) method: " + Number(null1));
    console.log("Boolean(null) method: " + Boolean(null1));
}

function undefineds() {
    let undefined1 = undefined;
    console.log("Undefined1 is undefined");
    console.log("Number(undefined) method: " + Number(undefined1));
    console.log("Boolean(undefined) method: " + Boolean(undefined1));
}

function objects() {
    let object1 = {age: 20, firstName: "Oana-Eliza", lastName: "Alexa", isStudent: true, 
    fullName : function() {
        return this.firstName + " " + this.lastName;
    } 
    };
    console.log("Age of object1 is: " + object1.age);
    console.log("First name of object1 is: " + object1.firstName);
    console.log("Last name of object1 is: " + object1.lastName);
    console.log("Object1 is a student: " + object1.isStudent);
    console.log("Full name of object1 is: " + object1.fullName());
}