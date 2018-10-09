export const teamroles = [
  {
    name: 'Implementer',
    description: 'Implementer is the practical organizer within the team. Disciplined, orderly and task-oriented. Implementer puts plans and ideas into easily executable tasks. He/she can be a little too practical and conservative when the usefulness of new ideas is not immediately clear.',
    character: 'Structured approach, hard-working, down to earth, a realistic professional, sees what works and what does not.',
    likes: 'Unambiguous agreements, clear instructions, rhythm and regularity.',
    contributions: 'Practical organizer in the team. Puts ideas into plans and actions. Excellent executer of plans, systematic worker.',
    pitfalls: 'Acts before thinking things through. Being inflexible, dismissing innovation too quickly.',
  },
  {
    name: 'Resource Investigator',
    description: 'Resource Investigator is the cheerful, extroverted person with lots of contacts within and outside the team. He/she is enthusiastic, adventurous and open-minded and always looking for new ideas. Resource Investigator is naturally good at developing and maintaining contacts, but may become careless when the novelty wears off.',
    character: 'An extrovert, communicative, playful, enthusiastic, natural brainstormer, opportunist and curious.',
    likes: 'Innovation, people and contacts, variety and adventure.',
    contributions: 'Numerous external contacts, brings new ideas and opportunities into the team. Brainstorm talent, improviser.',
    pitfalls: 'Being too easily distracted, starting things without finishing them, being overenthusiastic or too optimistic.',
  },{
    name: 'Plant',
    description: 'Plant is the creative thinker of the team. Innovative and original. A free spirit who needs space to fantasize about new and surprising solutions to complex problems. Plant is not always practical and sometimes misses what others require from him/her.',
    character: 'An introvert, thinker, daydreamer, philosopher.',
    likes: 'Intellectual challenges, creativity, peace and quiet, space and recognition.',
    contributions: 'Creativity, innovative ideas. Solves difficult problems.',
    pitfalls: 'Being too unrealistic, thinking without acting or practical results.',
  },{
    name: 'Monitor Evaluator',
    description: 'Monitor Evaluator is sensible, thoughtful and critical. The analyst of the team. He/she is always analyzing situations and wants to get to the bottom of things. As Monitor he/she may deliberate long and thoroughly and his or her judgment is rarely wrong.',
    character: 'Thoughtful evaluator, an analyzer, asks questions, explores logical reasoning.',
    likes: 'Insight and overview, analyzing, to understand and comprehend.',
    contributions: 'Overview, accurate analysis and judgment, strategic and critical insight.',
    pitfalls: 'Maintains intellectual reasoning too long, being overly critical, impassive and distant.',
  },{
    name: 'Shaper',
    description: 'Shaper is driven, passionate and willful. He/she has a strong urge to perform, looks for challenges and gets things going. Shaper makes sure deadlines are made and goals are met, one way or the other. He/she can get frustrated and react angrily or emotionally.',
    character: 'Driven, passionate, willful, competitive, entrepreneur, pioneer, courageous, impatient.',
    likes: 'Pressure and competition, clarity, results and winning.',
    contributions: 'Moves teams forward, provides results, overcomes obstacles, handles conflict easily.',
    pitfalls: 'Can provoke others and hurt people’s feelings. Intolerant to less ambitious people.',
  },{
    name: 'Coordinator',
    description: 'Coordinator is the natural coordinator of the team. He/she looks after procedures, helps team members clarify intentions and summarizes what everyone wants. He/she has a nose for talent and knows how to utilize people to their full potential. Coordinator trusts others and delegates easily but sometimes has a tendency to leave too much work to others.',
    character: 'Natural coordinator, calm, tolerant, positive, open-minded and curious.',
    likes: 'Procedures, progress and decisions, combined efforts, setting goals, togetherness.',
    contributions: 'Clarifies goals, structures discussions, creates unity, takes (tough) decisions.',
    pitfalls: 'Slightly manipulative to reach goals. Delegates work too easily.',
  },{
    name: 'Completer-Finisher',
    description: 'Completer-Finisher has the talent to always feel what could go wrong. This leads to a lot of attention to details, checking and rechecking, and a tendency to perfectionism. He/she monitors the quality and safety, but can sometimes be overprotective and find it difficult to delegate things to others.',
    character: 'Conscientious, a perfectionist, focused on detail, inner tension, (overly) concerned, accurate.',
    likes: 'Safety and security, quality, details.',
    contributions: 'Eye for detail, foresees potential problems, watches over quality, risk analyses.',
    pitfalls: 'Inclined to worry unduly and discourages too much. Reluctant to delegate. Can be a nit-picker.',
  },{
    name: 'Teamworker',
    description: 'Teamworker is the most sensitive member of the team, helpful, accommodating and focused on creating a pleasant atmosphere and sense of togetherness. He/she prefers balance and harmony and is close to others. Teamworker has difficulty with conflict and may have trouble taking decisions at critical times.',
    character: 'Social, people-oriented, mild, diplomatic, easy going, funny, sensitive.',
    likes: 'Togetherness, connectedness, improving personal relationships.',
    contributions: 'Relationship oriented, sensitive and caring. Creates togetherness and team spirit.',
    pitfalls: 'Indecisive in crunch situations. Avoids conflict and confrontation.',
  },/*{
    name: 'Specialist',
    description: ' is an immeasurable source of knowledge in his/her field. An advisor who is gladly consulted and will provide knowledge on a specific topic with pleasure and ease. His/her contributions to the team are his/her substantial knowledge and technical skills. Specialist thrives less well when working together and does not care for social activities that much.',
    character: 'Dedicated professional, silent and unfaltering soloist, highly task-oriented, advisor on the sideline.',
    likes: 'Working independently, peace and regularity, opportunity to present extensive knowledge.',
    contributions: 'Expertise and specialized knowledge.',
    pitfalls: 'Becoming isolated. Not getting his/her advice accepted because of lack of social interaction.',
  },*/
]

export const roleNames = teamroles.map(({name})=> name);