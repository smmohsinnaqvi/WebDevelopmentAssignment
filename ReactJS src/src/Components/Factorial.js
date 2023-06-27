function Factorial(ps)
{
    let num=parseInt(ps.n);
    let fact=1;
    let i;
    for(i=1;i<=num;i++)
    {
        fact*=i;
    }
    return(<h1>Factorial Of Number is : {fact}</h1>);
}
Factorial.defaultProps={
    n:5
};

export default Factorial;