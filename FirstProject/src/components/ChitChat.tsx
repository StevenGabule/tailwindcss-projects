
const ChitChat = () => {
	return (
		<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
			<div className="shrink-0">
				<img src="./logo.svg" alt="Logo" className='h-12 w-12' />
			</div>
			<div>
				<div className="text-xl font-medium text-black">
					<p className="text-slate-500">You have a new message!</p>
				</div>
			</div>
		</div>
	)
}

export default ChitChat;