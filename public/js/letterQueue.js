import Queue from './Queue.js';
 
export function setupLetterQueue()
{
	const letterQueue = new Queue();
	letterQueue.enqueue("A");
	letterQueue.enqueue("D");
	letterQueue.enqueue("A");
	letterQueue.enqueue("D");
	letterQueue.enqueue("D");

	return letterQueue;
}