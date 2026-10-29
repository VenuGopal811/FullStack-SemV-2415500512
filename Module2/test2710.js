{
	let [a, b] = array;
}
{
	let [a, , b] = array;
}
{
	let [a = aDefault, b] = array;
}
{
	let [a, b, ...rest] = array;
}
{
	let [a, , b, ...rest] = array;
}
{
	let [a, b, ...{ pop, push }] = array;
}
{
	let [a, b, ...[c, d]] = array;
}

{
	let { a, b } = obj;
}
{
	let { a: a1, b: b1 } = obj;
}
{
	let { a: a1 = aDefault, b = bDefault } = obj;
}
{
	let { a, b, ...rest } = obj;
}
{
	let { a: a1, b: b1, ...rest } = obj;
}
{
	let { [key]: a } = obj;
}

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // parentheses are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);