module.exports.user=function(req,res)
{
    return res.end('<h1>It is me</h1>');
}

module.exports.profile=function(req,res)
{
    return res.end('<h1> My profile page</h1>');
}

module.exports.create=function(req,res)
{
    return res.end('<h1>Create profile</h1>');
}