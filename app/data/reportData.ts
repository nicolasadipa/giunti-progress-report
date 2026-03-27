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
    { id: 1,  name: "David Fernández",                    email: "david.fernandez@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 2,  name: "Duccio Galli",                       email: "duccio.galli@giuntipsy.com",            progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 3,  name: "Carlo Sortino",                      email: "carlo.sortino@giuntipsy.com",           progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 4,  name: "Ilaria Sartorio",                    email: "ilaria.sartorio@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-20" },
    { id: 5,  name: "Stefano Scotto",                     email: "stefano.scotto@giuntipsy.com",          progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 6,  name: "Stefano Cutello",                    email: "stefano.cutello@giuntipsy.com",         progress: 100, certifiedCourses: 4, startDate: "2026-03-19" },
    { id: 7,  name: "Giuseppe Agrusti",                   email: "giuseppe.agrusti@giuntipsy.com",        progress: 91,  certifiedCourses: 3, startDate: "2026-03-19" },
    { id: 8,  name: "Sandra María Redondo Fernández",     email: "sandra.redondofernandez@giuntipsy.com", progress: 75,  certifiedCourses: 3, startDate: "2026-03-23" },
    { id: 9,  name: "José Sales Grade",                   email: "jose.grade@giuntipsy.com",              progress: 56,  certifiedCourses: 2, startDate: "2026-03-20" },
    { id: 10, name: "Jorge Ramón Gómez",                  email: "jorge.ramon@giuntipsy.com",             progress: 55,  certifiedCourses: 2, startDate: "2026-03-24" },
    { id: 11, name: "Sandra Contiero",                    email: "sandra.contiero@giuntipsy.com",         progress: 50,  certifiedCourses: 2, startDate: "2026-03-19" },
    { id: 12, name: "Marco Fortini",                      email: "marco.fortini@giuntipsy.com",           progress: 50,  certifiedCourses: 2, startDate: "2026-03-19" },
    { id: 13, name: "Venancio Fernando Pereira Henriques",email: "venancio.pereira@giuntipsy.com",        progress: 50,  certifiedCourses: 2, startDate: "2026-03-23" },
    { id: 14, name: "Luca Mandolesi",                     email: "luca.mandolesi@giuntipsy.com",          progress: 38,  certifiedCourses: 0, startDate: "2026-03-19" },
    { id: 15, name: "Álvaro Morales de Vera",             email: "alvaro.morales@giuntipsy.com",          progress: 32,  certifiedCourses: 1, startDate: "2026-03-19" },
    { id: 16, name: "Irene Guarneri",                     email: "irene.guarneri@giuntipsy.com",          progress: 29,  certifiedCourses: 1, startDate: "2026-03-24" },
    { id: 17, name: "Caterina Perri",                     email: "caterina.perri@giuntipsy.com",          progress: 15,  certifiedCourses: 0, startDate: "2026-03-23" },
    { id: 18, name: "Jordi Bretos",                       email: "jordi.bretos@giuntipsy.com",            progress: 10,  certifiedCourses: 0, startDate: "2026-03-23" },
    { id: 19, name: "Matteo Rosati",                      email: "matteo.rosati@giuntipsy.com",           progress: 8,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 20, name: "Mateo Turanzas",                     email: "mateo.turanzas@giuntipsy.com",          progress: 7,   certifiedCourses: 0, startDate: "2026-03-26" },
    { id: 21, name: "António Chagas",                     email: "antonio.chagas@giuntipsy.com",          progress: 3,   certifiedCourses: 0, startDate: "2026-03-19" },
    { id: 22, name: "Cosimo Aleo",                        email: "cosimo.aleo@giuntipsy.com",             progress: 3,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 23, name: "Mariangela Lucchese",                email: "mariangela.lucchese@giuntipsy.com",     progress: 1,   certifiedCourses: 0, startDate: "2026-03-19" },
    { id: 24, name: "Arturo Cervera",                     email: "arturo.cervera@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 25, name: "Chiara Busdraghi",                   email: "chiara.busdraghi@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 26, name: "Daniel Giunti",                      email: "daniel.giunti@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 27, name: "Dionisio Torre",                     email: "dionisio.torre@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 28, name: "Andrea Damiano",                     email: "andrea.damiano@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
  ]
};

export const intermediateRoute: RouteData = {
  name: "Ruta IA Básica-Intermedia",
  totalCourses: 6,
  participants: [
    { id: 1,  name: "Duccio Galli",                       email: "duccio.galli@giuntipsy.com",            progress: 100, certifiedCourses: 6, startDate: "2026-03-20" },
    { id: 2,  name: "Stefano Scotto",                     email: "stefano.scotto@giuntipsy.com",          progress: 57,  certifiedCourses: 3, startDate: "2026-03-19" },
    { id: 3,  name: "Álvaro Morales de Vera",             email: "alvaro.morales@giuntipsy.com",          progress: 48,  certifiedCourses: 2, startDate: "2026-03-19" },
    { id: 4,  name: "David Fernández",                    email: "david.fernandez@giuntipsy.com",         progress: 33,  certifiedCourses: 2, startDate: "2026-03-26" },
    { id: 5,  name: "Luca Mandolesi",                     email: "luca.mandolesi@giuntipsy.com",          progress: 29,  certifiedCourses: 1, startDate: "2026-03-23" },
    { id: 6,  name: "Stefano Cutello",                    email: "stefano.cutello@giuntipsy.com",         progress: 16,  certifiedCourses: 1, startDate: "2026-03-24" },
    { id: 7,  name: "Mateo Turanzas",                     email: "mateo.turanzas@giuntipsy.com",          progress: 16,  certifiedCourses: 1, startDate: "2026-03-20" },
    { id: 8,  name: "José Sales Grade",                   email: "jose.grade@giuntipsy.com",              progress: 11,  certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 9,  name: "Jordi Bretos",                       email: "jordi.bretos@giuntipsy.com",            progress: 8,   certifiedCourses: 0, startDate: "2026-03-24" },
    { id: 10, name: "Ilaria Sartorio",                    email: "ilaria.sartorio@giuntipsy.com",         progress: 7,   certifiedCourses: 0, startDate: "2026-03-25" },
    { id: 11, name: "Chiara Busdraghi",                   email: "chiara.busdraghi@giuntipsy.com",        progress: 5,   certifiedCourses: 0, startDate: "2026-03-25" },
    { id: 12, name: "Carlo Sortino",                      email: "carlo.sortino@giuntipsy.com",           progress: 2,   certifiedCourses: 0, startDate: "2026-03-26" },
    { id: 13, name: "Cosimo Aleo",                        email: "cosimo.aleo@giuntipsy.com",             progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 14, name: "Mariangela Lucchese",                email: "mariangela.lucchese@giuntipsy.com",     progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 15, name: "Andrea Damiano",                     email: "andrea.damiano@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 16, name: "Dionisio Torre",                     email: "dionisio.torre@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 17, name: "Matteo Rosati",                      email: "matteo.rosati@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 18, name: "Venancio Fernando Pereira Henriques",email: "venancio.pereira@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 19, name: "Sandra Contiero",                    email: "sandra.contiero@giuntipsy.com",         progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 20, name: "Irene Guarneri",                     email: "irene.guarneri@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 21, name: "Caterina Perri",                     email: "caterina.perri@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 22, name: "Jorge Ramón Gómez",                  email: "jorge.ramon@giuntipsy.com",             progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 23, name: "Arturo Cervera",                     email: "arturo.cervera@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 24, name: "Giuseppe Agrusti",                   email: "giuseppe.agrusti@giuntipsy.com",        progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 25, name: "Daniel Giunti",                      email: "daniel.giunti@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 26, name: "Sandra María Redondo Fernández",     email: "sandra.redondofernandez@giuntipsy.com", progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 27, name: "Marco Fortini",                      email: "marco.fortini@giuntipsy.com",           progress: 0,   certifiedCourses: 0, startDate: null },
    { id: 28, name: "António Chagas",                     email: "antonio.chagas@giuntipsy.com",          progress: 0,   certifiedCourses: 0, startDate: null },
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
