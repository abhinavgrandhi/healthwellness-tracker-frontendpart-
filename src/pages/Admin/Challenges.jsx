import { useEffect, useState } from "react";
import api from "../../services/api";

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState("");

  useEffect(() => {
    async function fetchChallenges() {
      const response = await api.get("/admin/challenges");
      setChallenges(response.data);
    }
    fetchChallenges();
  }, []);

  const addChallenge = async () => {
    if (newChallenge) {
      const response = await api.post("/admin/challenges", { name: newChallenge });
      setChallenges([...challenges, response.data]);
      setNewChallenge("");
    }
  };

  const deleteChallenge = async (id) => {
    await api.delete(`/admin/challenges/${id}`);
    setChallenges(challenges.filter(challenge => challenge._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Manage Challenges</h1>

      <div className="mb-5">
        <input 
          type="text" 
          value={newChallenge} 
          onChange={(e) => setNewChallenge(e.target.value)} 
          placeholder="New Challenge Name" 
          className="border p-2"
        />
        <button onClick={addChallenge} className="bg-blue-500 text-white p-2 ml-2">Add</button>
      </div>

      <ul>
        {challenges.map(challenge => (
          <li key={challenge._id} className="flex justify-between p-2 border">
            {challenge.name}
            <button 
              onClick={() => deleteChallenge(challenge._id)} 
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
