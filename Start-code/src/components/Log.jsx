function Log({logs : {isPlayer, isDamage, point}}){
    return (
        <section id="log" className="container">
        <h2>Battle Log</h2>
        <ul>
            {logs.map((log, index) => (
                <li key={index}>
                <span>{isPlayer? "Player" : "Monster"}</span>
                <span>{isDamage? "attaked for" : "heals for"} <span className={isDamage? "log--damage" : "log--heal"}>{point}</span></span>
            </li>
            ))}
        </ul>
    </section>
    )
}

export default Log;