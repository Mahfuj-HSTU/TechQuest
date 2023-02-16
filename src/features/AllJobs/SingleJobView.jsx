import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import { ImLocation } from 'react-icons/im';
import { RiRemoteControlLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addApply, fetchApplicationData } from '../ApplyJob/ApplyJobSlice';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useIsApplied from '../../Hooks/useIsApplied';
import Loading from '../../Pages/Shared/Loading/Loading';
import { useState } from 'react';
import RemoveJob from './RemoveJob';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';

const SingleJobView = () => {
	const [applied, setApplied] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();
	const { user } = useContext(AuthContext);
	const jobs = useLoaderData();

	const data = useSelector(
		(state) => state
		// (state) => state.applicationReducer
	);
	// console.log(data)
	const { isLoading, error, applications } = data.applicationReducer;
	const role = data.roleReducer.role.role;
	console.log(data.roleReducer);

	// checking if user is applied or not
	const isApplied = useIsApplied(applications, jobs._id);
	// console.log(applied);
	useEffect(() => {
		dispatch(fetchApplicationData());
		dispatch(fetchRole(user?.email));
	}, [dispatch, user?.email]);

	const job = location.state;
	const {
		_id,
		openings,
		jobTitle,
		jobDescription,
		jobRequirements,
		jobResponsibilities,
		jobStatus,
		jobType,
		salary,
		salaryCurrency,
		experience,
		language,
		mustSkills,
		optionalSkills,
	} = jobs;
	// console.log(job);

	const handleApply = () => {
		// console.log(job);
		const applyInfo = {
			job,
			email: user?.email,
			name: data?.roleReducer?.role?.name,
			address: data?.roleReducer?.role?.address,
			photoUrl: data?.roleReducer?.role?.photoUrl,
			experience: data?.roleReducer?.role?.experience,
			notification: 'true',
		};
		dispatch(addApply(applyInfo));
		setApplied(!applied);
	};

	return (
		<div className='max-w-[1240px] mx-auto mt-24'>
			{isLoading && <Loading />}
			{error && <div className='text-red-600'>{error}</div>}
			{job && (
				<div className='m-20 text-left'>
					{/* <div className='flex gap-5'> */}
					<h1 className='text-4xl font-semibold text-cyan-600'>{jobTitle}</h1>
					{/* {role === "admin" && (
              <RemoveJob
                id={_id}
                title={jobTitle}
                openings={openings}
                des={jobDescription}
              ></RemoveJob>
            )} */}
					{/* </div> */}
					<div className='flex gap-3 my-3'>
						<p className='border p-1 rounded-lg'>
							<ImLocation className='inline' />
							{job.location}
						</p>
						<p className='border p-1 rounded-lg'>
							<RiRemoteControlLine className='inline' /> {jobStatus}
						</p>
						<p className='border p-1 rounded-lg'>{jobType}</p>
						<p className='border p-1 rounded-lg'>
							{salary} {salaryCurrency}
						</p>
					</div>
					<hr className='w-auto my-5' />
					<div className='my-2'>
						<p className='font-semibold inline mr-1'>Must-have skills:</p>
						<small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200 '>
							{mustSkills}
						</small>
					</div>
					<div className='my-2'>
						<p className='font-semibold inline mr-1'>Nice-to-have Skills</p>
						<small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>
							{optionalSkills}
						</small>
					</div>
					<div className='my-2'>
						<p className='font-semibold inline'>Language Required: </p>
						<small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>
							{language}
						</small>
					</div>
					<div className='my-2'>
						<p className='font-semibold inline'>Experience: </p>
						<small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>
							{experience}
						</small>
					</div>
					<p className='my-5 text-justify'>{jobDescription}</p>
					<p className='font-bold'>Responsibilities:</p>
					<ul className='my-5 ml-5'>
						{
							jobResponsibilities
							// .map((jobRes, i) =>
							//     <li key={i}>* {jobRes}</li>
							// )
						}
					</ul>
					<p className='font-bold'>Requirements:</p>
					<ul className='my-5 ml-5'>
						{
							jobRequirements
							// .map((jobReq, i) =>
							//     <li key={i}>* {jobReq}</li>
							// )
						}
					</ul>

					<div>
						{role === 'admin' ? (
							<RemoveJob
								id={_id}
								title={jobTitle}
								openings={openings}
								des={jobDescription}></RemoveJob>
						) : (
							<>
								{role === 'jobSeeker' ? (
									<>
										{isApplied === true ? (
											<p className='text-white font-semibold bg-sky-400 rounded-lg w-20 px-3 py-4 hover:bg-red-400'>
												Applied
											</p>
										) : (
											<button
												onClick={() => handleApply()}
												className='btn btn-info btn-outline'
												disabled={applied}>
												Apply Now
											</button>
										)}
									</>
								) : (
									<h2 className='text-xl font-semibold mt-10 text-green-600'>
										Logged in as a employee to apply the job
									</h2>
								)}
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleJobView;
