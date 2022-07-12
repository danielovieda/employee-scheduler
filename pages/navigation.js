import Link from 'next/link'

export default function Navigation(props) {
return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link href="/"><a class="navbar-brand">Employee Scheduler</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link href="/signin"><a class="nav-link">Sign In</a></Link>
        </li>
        <li class="nav-item">
        <Link href="/signup"><a class="nav-link">Sign Up</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
)
}