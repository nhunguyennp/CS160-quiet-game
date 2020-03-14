export default class Queue {
	constructor()
	{
		this.items = [];
	}

	enqueue(element)
	{
		this.items.push(element);
	}

	dequeue(element)
	{
		if (this.isEmpty())
		{
			return "Underflow";
		}
		return this.items.shift();
	}

	front()
	{
		if (this.isEmpty())
		{
			return "No element in Queue";
		}
		return this.items[0];
	}

	isEmpty()
	{
		return this.items.length == 0;
	}

	printQueue()
	{
		var str = "";
		for (var i = 0; i < this.items.length; i++)
			str += this.items[i] + " ";
		return str;
	}
}