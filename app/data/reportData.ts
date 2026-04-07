export interface Participant {
  id: number;
  name: string;
  email: string;
  progress: number;
  certifiedCourses: number;
  startDate: string | null;
}

export interface RouteData {
  name: string;
  totalCourses: number;
  participants: Participant[];
}

export const basicRoute: RouteData = {
  name: "Ruta IA Básica",
  totalCourses: 4,
  participants: [
    { id: 1,  name: "Stefano Cutello",                    email: "stefano.cutello@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 2,  name: "Venancio Fernando Pereira Henriques",email: "venancio.pereira@giuntipsy.com",        progress: 100, certifiedCourses: 4, startDate: "2026-03-23" },
    { id: 3,  name: "Duccio Galli",                       email: "duccio.galli@giuntipsy.com",            progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 4,  name: "Carlo Sortino",                      email: "carlo.sortino@giuntipsy.com",           progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 5,  name: "Ilaria Sartorio",                    email: "ilaria.sartorio@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 6,  name: "Iker Pardo",                         email: "iker.pardo@giuntipsy.com",              progress: 100, certifiedCourses: 4, startDate: "2026-03-30" },
    { id: 7,  name: "Giuseppe Agrusti",                   email: "giuseppe.agrusti@giuntipsy.com",        progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 8,  name: "David Fernández",                    email: "david.fernandez@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 9,  name: "Marco Fortini",                      email: "marco.fortini@giuntipsy.com",           progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 10, name: "José Sales Grade",                   email: "jose.grade@giuntipsy.com",              progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 11, name: "Stefano Scotto",                     email: "stefano.scotto@giuntipsy.com",          progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 12, name: "Jorge Ramón Gómez",                  email: "jorge.ramon@giuntipsy.com",             progress: 81,  certifiedCourses: 3, startDate: "2026-03-24" },
    { id: 13, name: "Luca Mandolesi",                     email: "luca.mandolesi@giuntipsy.com",          progress: 78,  certifiedCourses: 3, startDate: "2026-03-19" },
    { id: 14, name: "Irene Guarneri",                     email: "irene.guarneri@giuntipsy.com",          progress: 89,  certifiedCourses: 3, startDate: "2026-03-24" },
    { id: 15, name: "Sandra María Redondo Fernández",     email: "sandra.redondofernandez@giuntipsy.com", progress: 92,  certifiedCourses: 3, startDate: "2026-03-23" },
    { id: 16, name: "Sandra Contiero",                    email: "sandra.contiero@giuntipsy.com",         progress: 75,  certifiedCourses: 3, startDate: "2026-03-19" },
    { id: 17, name: "Mateo Turanzas",                     email: "mateo.turanzas@giuntipsy.com",          progress: 75,  certifiedCourses: 3, startDate: "2026-03-26" },
    { id: 18, name: "Caterina Perri",                     email: "caterina.perri@giuntipsy.com",          progress: 38,  certifiedCourses: 1, startDate: "2026-03-23" },
    { id: 19, name: "Álvaro Morales de Vera",             email: "alvaro.morales@giuntipsy.com",          progress: 32,  certifiedCourses: 1, startDate: "2026-03-19" },
    { id: 20, name: "Arturo Cervera",                     email: "arturo.cervera@giuntipsy.com",          progress: 25,  certifiedCourses: 1, startDate: "2026-03-28" },
    { id: 21, name: "António Chagas",                     email: "antonio.chagas@giuntipsy.com",          progress: 10,  certifiedCourses: 0, startDate: "2026-03-19" },
    { id: 22, name: "Jordi Bretos",                       email: "jordi.bretos@giuntipsy.com",            progress: 10,  certifiedCourses: 0, startDate: "2026-03-23" },
    { id: 23, name: "Matteo Rosati",                      email: "matteo.rosati@giuntipsy.com",           progress: 8,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 24, name: "Cosimo Aleo",                        email: "cosimo.aleo@giuntipsy.com",             progress: 3,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 25, name: "Mariangela Lucchese",                email: "mariangela.lucchese@giuntipsy.com",     progress: 1,   certifiedCourses: 0, startDate: "2026-03-19" },
    { id: 26, name: "Tommaso Salsetta",                   email: "tommaso.salsetta@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 27, name: "Daniel Giunti",                      email: "daniel.giunti@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 28, name: "Chiara Busdraghi",                   email: "chiara.busdraghi@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 29, name: "Dionisio Torre",                     email: "dionisio.torre@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 30, name: "Andrea Damiano",                     email: "andrea.damiano@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
  ]
};

export const intermediateRoute: RouteData = {
  name: "Ruta IA Básica-Intermedia",
  totalCourses: 6,
  participants: [
    { id: 1,  name: "Stefano Scotto",                     email: "stefano.scotto@giuntipsy.com",          progress: 100, certifiedCourses: 6, startDate: "2026-03-19" },
    { id: 2,  name: "José Sales Grade",                   email: "jose.grade@giuntipsy.com",              progress: 100, certifiedCourses: 6, startDate: "2026-03-24" },
    { id: 3,  name: "Duccio Galli",                       email: "duccio.galli@giuntipsy.com",            progress: 100, certifiedCourses: 6, startDate: "2026-03-20" },
    { id: 4,  name: "Luca Mandolesi",                     email: "luca.mandolesi@giuntipsy.com",          progress: 71,  certifiedCourses: 4, startDate: "2026-03-23" },
    { id: 5,  name: "David Fernández",                    email: "david.fernandez@giuntipsy.com",         progress: 66,  certifiedCourses: 4, startDate: "2026-03-26" },
    { id: 6,  name: "Giuseppe Agrusti",                   email: "giuseppe.agrusti@giuntipsy.com",        progress: 68,  certifiedCourses: 4, startDate: "2026-03-27" },
    { id: 7,  name: "Venancio Fernando Pereira Henriques",email: "venancio.pereira@giuntipsy.com",        progress: 100, certifiedCourses: 6, startDate: "2026-04-01" },
    { id: 8,  name: "Carlo Sortino",                      email: "carlo.sortino@giuntipsy.com",           progress: 50,  certifiedCourses: 3, startDate: "2026-03-26" },
    { id: 9,  name: "Álvaro Morales de Vera",             email: "alvaro.morales@giuntipsy.com",          progress: 62,  certifiedCourses: 3, startDate: "2026-03-19" },
    { id: 10, name: "Iker Pardo",                         email: "iker.pardo@giuntipsy.com",              progress: 25,  certifiedCourses: 1, startDate: "2026-04-02" },
    { id: 11, name: "Stefano Cutello",                    email: "stefano.cutello@giuntipsy.com",         progress: 18,  certifiedCourses: 1, startDate: "2026-03-24" },
    { id: 12, name: "Mateo Turanzas",                     email: "mateo.turanzas@giuntipsy.com",          progress: 16,  certifiedCourses: 1, startDate: "2026-03-20" },
    { id: 13, name: "Jordi Bretos",                       email: "jordi.bretos@giuntipsy.com",            progress: 8,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 14, name: "Ilaria Sartorio",                    email: "ilaria.sartorio@giuntipsy.com",         progress: 7,   certifiedCourses: 0, startDate: "2026-03-25" },
    { id: 15, name: "Chiara Busdraghi",                   email: "chiara.busdraghi@giuntipsy.com",        progress: 5,   certifiedCourses: 0, startDate: "2026-03-25" },
    { id: 16, name: "Arturo Cervera",                     email: "arturo.cervera@giuntipsy.com",          progress: 3,   certifiedCourses: 0, startDate: "2026-03-30" },
    { id: 17, name: "Tommaso Salsetta",                   email: "tommaso.salsetta@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 18, name: "Dionisio Torre",                     email: "dionisio.torre@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 19, name: "Sandra Contiero",                    email: "sandra.contiero@giuntipsy.com",         progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 20, name: "Irene Guarneri",                     email: "irene.guarneri@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 21, name: "Andrea Damiano",                     email: "andrea.damiano@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 22, name: "Mariangela Lucchese",                email: "mariangela.lucchese@giuntipsy.com",     progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 23, name: "Cosimo Aleo",                        email: "cosimo.aleo@giuntipsy.com",             progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 24, name: "Matteo Rosati",                      email: "matteo.rosati@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 25, name: "Caterina Perri",                     email: "caterina.perri@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 26, name: "Jorge Ramón Gómez",                  email: "jorge.ramon@giuntipsy.com",             progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 27, name: "Daniel Giunti",                      email: "daniel.giunti@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 28, name: "António Chagas",                     email: "antonio.chagas@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 29, name: "Sandra María Redondo Fernández",     email: "sandra.redondofernandez@giuntipsy.com", progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 30, name: "Marco Fortini",                      email: "marco.fortini@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
  ]
};

export function getStats(route: RouteData) {
  const total = route.participants.length;
  const completed = route.participants.filter(p => p.progress === 100).length;
  const inProgress = route.participants.filter(p => p.progress > 0 && p.progress < 100).length;
  const notStarted = route.participants.filter(p => p.progress === 0).length;
  const avgProgress = Math.round(route.participants.reduce((sum, p) => sum + p.progress, 0) / total);
  const totalCertifications = route.participants.reduce((sum, p) => sum + p.certifiedCourses, 0);
  return { total, completed, inProgress, notStarted, avgProgress, totalCertifications };
}

export function getTopPlayers(limit = 10) {
  const allEmails = new Set([
    ...basicRoute.participants.map(p => p.email),
    ...intermediateRoute.participants.map(p => p.email),
  ]);

  return Array.from(allEmails).map(email => {
    const basic = basicRoute.participants.find(p => p.email === email);
    const inter = intermediateRoute.participants.find(p => p.email === email);
    const name = basic?.name || inter?.name || "";
    const basicCerts = basic?.certifiedCourses ?? 0;
    const interCerts = inter?.certifiedCourses ?? 0;
    const basicProgress = basic?.progress ?? 0;
    const interProgress = inter?.progress ?? 0;
    const totalCerts = basicCerts + interCerts;
    // score: certs × 10 + avg progress
    const score = totalCerts * 10 + Math.round((basicProgress + interProgress) / 2);
    return { email, name, basicCerts, interCerts, basicProgress, interProgress, totalCerts, score };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, limit);
}
