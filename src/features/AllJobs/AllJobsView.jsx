import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllJobs } from './AllJobsSlice';
import SearchOption from '../Search/SearchOptionView';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../Hooks/useServerLink';
import EnrolmentCourse from '../../Pages/Courses/EnrolmentCourse/EnrolmentCourse';

const AllJobsView = () => {
	const { data: courses = [] } = useQuery({
		queryKey: ['courses'],
		queryFn: () => fetch(`${ServerLink}/courses`).then((res) => res.json()),
	});
	// console.log( courses );

	const { user } = useContext(AuthContext);
	const state = useSelector((state) => state);
	// console.log(state);
	const jobs = state.jobsReducer.jobs;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllJobs());
		dispatch(fetchRole(user?.email));
	}, [dispatch, user?.email]);

	return (
		<div className=' max-w-[1240px] mx-auto'>
			<div className='mx-5 '>
				<h1 className='text-4xl font-bold text-left'>
					Find your dream job abroad or remote
				</h1>
				<SearchOption />

				<div className='flex'>
					<div className='w-full'>
						{jobs &&
							jobs.map((job) => {
								const {
									_id,
									jobTitle,
									jobDescription,
									jobStatus,
									jobType,
									location,
									salary,
									salaryCurrency,
									experience,
									mustSkills,
									optionalSkills,
									openings,
								} = job;
								return (
									<div
										key={_id}
										className=' mx-5 gap-5'>
										<div
											data-aos='fade-up'
											className='text-left border rounded-lg my-5 p-5  shadow-lg hover:shadow-2xl'>
											<Link
												state={job}
												to={`/job-details/${_id}`}>
												{openings <= 1 ? (
													<small>{openings} position</small>
												) : (
													<small>{openings} positions</small>
												)}
												<div className='flex gap-5'>
													<div>
														<h1 className='text-xl font-semibold text-cyan-600'>
															{jobTitle}
														</h1>
														<div className='flex flex-col md:flex-row justify-start  md:gap-0'>
															<small className='m-1'>{location}</small>
															<small className='m-1'>{jobStatus}</small>
															<small className='m-1'>{jobType}</small>
														</div>
														<div className=''>
															<small className='m-1'>{salary}</small>
															<small className='m-1'>{salaryCurrency}</small>
														</div>
													</div>

													{/* <div className="justify-end">
                    <RemoveJob id={_id} title={jobTitle} des={jobDescription} openings={openings}/>
                  </div> */}
												</div>
												<p className='my-2'>{jobDescription}</p>
												{/* .slice(0,250) */}
												<div className='flex flex-col md:flex-row gap-3 w-56 md:w-auto p-1 font-semibold text-gray-400'>
													<p className='border rounded-3xl text-sm py-1 px-3 text-sky-800'>
														{mustSkills}
													</p>
													<p className='border rounded-3xl text-sm py-1 px-3'>
														{optionalSkills}
													</p>
													<p className='border rounded-3xl text-sm py-1 px-3'>
														{experience}
													</p>
												</div>
											</Link>
										</div>
									</div>
								);
							})}
					</div>

					<div className='w-3/6 '>
						<div className='md:col-span-1 hidden lg:inline md:inline '>
							{courses.map(
								(course) => (
									<EnrolmentCourse
										key={course._id}
										course={course}></EnrolmentCourse>
								)
								// console.log(course , "course");
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllJobsView;
