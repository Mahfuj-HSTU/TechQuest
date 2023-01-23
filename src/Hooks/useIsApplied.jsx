const useIsApplied = (data, currentId) => {
    let c = false;
    // console.log(data);
    data.map(check =>
        c = ((check.job._id === currentId) && true)
        // console.log(check.job._id)
    )
    return c;
};

export default useIsApplied;