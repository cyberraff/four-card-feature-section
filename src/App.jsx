import {} from 'react';
import './App.css';

function App() {
	return (
		<>
			<div className='text-xl space-y-4 text-gray-600 font-poppins my-11  lg:mx-auto'>
				<h1 className='text-4xl lg:text-3xl font-light'>
					Reliable, efficient delivery
				</h1>
				<h2 className=' font-semibold text-4xl  lg:text-3xl'>
					Powered by Technology
				</h2>
				<p className='pt-5 px-10 mx-auto md:w-1/2'>
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
				<div className='text-left pt-4 lg:h-[40rem] lg:w-[77rem] lg:mx-auto'>
					<div className='mx-auto  border-t-4 border-[#45d3d3] rounded-lg h-[22rem] w-[32rem] shadow-2xl my-10 py-10 px-12 lg:py-7 lg:px-8 lg:float-left lg:h-[16rem] lg:w-[24rem] lg:mt-[11.5rem]'>
						<h2 className='text-3xl  lg:text-xl font-bold pb-6 lg:pb-4'>
							Supervisor
						</h2>
						<p className='lg:text-base'>
							Monitors activity to identify project roadblocks
						</p>

						<img
							className='float-right pt-12 lg:h-[5.8rem] lg:pt-7'
							src='../icon-supervisor.svg'
							alt=''
						/>
					</div>
					<div className='mx-auto border-t-4 border-[#ea5353]  rounded-lg h-[22rem] w-[32rem] shadow-2xl my-10 py-10 px-12 lg:py-7 lg:px-8 lg:h-[16rem] lg:w-[24rem]'>
						<h2 className='text-3xl lg:text-xl font-bold pb-6 lg:pb-4'>
							Team Builder
						</h2>
						<p className='lg:text-base'>
							Scans our talent network to create the optimal team
							for your project
						</p>

						<img
							className='float-right pt-12 lg:h-[5.8rem] lg:pt-7'
							src='../icon-team-builder.svg'
							alt=''
						/>
					</div>
					<div className='mx-auto border-t-4 border-[#fcaf4a] rounded-lg h-[22rem] w-[32rem] shadow-2xl my-10 py-10 px-12 lg:py-7 lg:px-8 lg:h-[16rem] lg:w-[24rem]'>
						<h2 className='text-3xl lg:text-xl font-bold pb-6 lg:pb-4'>
							Karma
						</h2>
						<p className='lg:text-base'>
							Regularly evaluates our talent to ensure quality
						</p>
						<img
							className='float-right pt-12 lg:h-[5.8rem] lg:pt-7'
							src='../icon-karma.svg'
							alt=''
						/>
					</div>
					<div className='mx-auto border-t-4 border-[#549ef2] rounded-lg h-[22rem] w-[32rem] shadow-2xl my-10 py-10  px-12 lg:py-7 lg:px-8 lg:float-right lg:h-[16rem] lg:w-[24rem] lg:-mt-[28rem]'>
						<h2 className='text-3xl lg:text-xl font-bold pb-6 lg:pb-4'>
							Calculator
						</h2>
						<p className='lg:text-base'>
							Uses data from past projects to provide better
							delivery estimates
						</p>
						<img
							className='float-right pt-12 lg:h-[5.8rem] lg:pt-7'
							src='../icon-calculator.svg'
							alt=''
						/>
					</div>
				</div>
			</div>
			<footer>
				<p className='attribution'>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noreferrer'>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a
						href='https://twitter.com/CyberRaff_'
						target='_blank'
						rel='noreferrer'>
						Cyber Raff
					</a>
					.
				</p>
			</footer>
		</>
	);
}

export default App;
