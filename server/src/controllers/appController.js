export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    
  } catch (e) {
    return res.status(500).send({ error });
  }
}
