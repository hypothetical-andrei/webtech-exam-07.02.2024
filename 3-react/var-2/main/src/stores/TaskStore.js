class EmployeeStore {
	constructor() {
		this.items = [{
			id: 1,
			description: 'task 1',
			priority: 'high'		
		},{
			id: 2,
			description: 'task 2',
			priority: 'low'		
		}]
		this.emitter = new EventTarget()
	}

	saveItem(id, item) {
		const index = this.items.findIndex(e => e.id === id)
		if (index !== -1) {
			this.items[index].description = item.description
			this.items[index].priority = item.priority
		}
		console.warn(this.items)
		this.emitter.dispatchEvent(new Event('UPDATE'))
	}

	getItems() {
		return this.items
	}
}

const store = new EmployeeStore()

export default store