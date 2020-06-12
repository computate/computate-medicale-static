
// POST //

async function postCliniqueMedicale($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurCliniqueNom = $formulaireValeurs.find('.valeurCliniqueNom').val();
	if(valeurCliniqueNom != null && valeurCliniqueNom !== '')
		vals['cliniqueNom'] = valeurCliniqueNom;

	var valeurCliniqueEmplacement = $formulaireValeurs.find('.valeurCliniqueEmplacement').val();
	if(valeurCliniqueEmplacement != null && valeurCliniqueEmplacement !== '')
		vals['cliniqueEmplacement'] = valeurCliniqueEmplacement;

	var valeurCliniqueAdministrateurNom = $formulaireValeurs.find('.valeurCliniqueAdministrateurNom').val();
	if(valeurCliniqueAdministrateurNom != null && valeurCliniqueAdministrateurNom !== '')
		vals['cliniqueAdministrateurNom'] = valeurCliniqueAdministrateurNom;

	var valeurCliniqueMailDe = $formulaireValeurs.find('.valeurCliniqueMailDe').val();
	if(valeurCliniqueMailDe != null && valeurCliniqueMailDe !== '')
		vals['cliniqueMailDe'] = valeurCliniqueMailDe;

	var valeurCliniqueMailA = $formulaireValeurs.find('.valeurCliniqueMailA').val();
	if(valeurCliniqueMailA != null && valeurCliniqueMailA !== '')
		vals['cliniqueMailA'] = valeurCliniqueMailA;

	var valeurCliniqueNumeroTelephone = $formulaireValeurs.find('.valeurCliniqueNumeroTelephone').val();
	if(valeurCliniqueNumeroTelephone != null && valeurCliniqueNumeroTelephone !== '')
		vals['cliniqueNumeroTelephone'] = valeurCliniqueNumeroTelephone;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
		vals['cliniqueAddresse'] = valeurCliniqueAddresse;

	var valeurAnneeCles = $formulaireValeurs.find('.valeurAnneeCles').val();
	if(valeurAnneeCles != null && valeurAnneeCles !== '')
		vals['anneeCles'] = valeurAnneeCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	$.ajax({
		url: '/api/clinique'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postCliniqueMedicaleVals(vals, success, error) {
	$.ajax({
		url: '/api/clinique'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchCliniqueMedicale($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchCliniqueMedicaleFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
	var removePk = $formulaireFiltres.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
	var removeCree = $formulaireFiltres.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
	var removeModifie = $formulaireFiltres.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
	var removeObjetId = $formulaireFiltres.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(addObjetId != null && addObjetId !== '')
		vals['addObjetId'] = addObjetId;
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val();
	if(removeObjetId != null && removeObjetId !== '')
		vals['removeObjetId'] = removeObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal !== '')
		valeurArchive = valeurArchiveSelectVal == 'true';
	setArchive = removeArchive ? null : valeurArchive;
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal !== '')
		valeurSupprime = valeurSupprimeSelectVal == 'true';
	setSupprime = removeSupprime ? null : valeurSupprime;
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurCliniqueNom = $formulaireValeurs.find('.valeurCliniqueNom').val();
	if(valeurCliniqueNom != null && valeurCliniqueNom !== '')
	var removeCliniqueNom = $formulaireFiltres.find('.removeCliniqueNom').val() === 'true';
	var setCliniqueNom = removeCliniqueNom ? null : $formulaireValeurs.find('.setCliniqueNom').val();
	if(removeCliniqueNom || setCliniqueNom != null && setCliniqueNom !== '')
		vals['setCliniqueNom'] = setCliniqueNom;
	var addCliniqueNom = $formulaireValeurs.find('.addCliniqueNom').val();
	if(addCliniqueNom != null && addCliniqueNom !== '')
		vals['addCliniqueNom'] = addCliniqueNom;
	var removeCliniqueNom = $formulaireValeurs.find('.removeCliniqueNom').val();
	if(removeCliniqueNom != null && removeCliniqueNom !== '')
		vals['removeCliniqueNom'] = removeCliniqueNom;

	var valeurCliniqueEmplacement = $formulaireValeurs.find('.valeurCliniqueEmplacement').val();
	if(valeurCliniqueEmplacement != null && valeurCliniqueEmplacement !== '')
	var removeCliniqueEmplacement = $formulaireFiltres.find('.removeCliniqueEmplacement').val() === 'true';
	var setCliniqueEmplacement = removeCliniqueEmplacement ? null : $formulaireValeurs.find('.setCliniqueEmplacement').val();
	if(removeCliniqueEmplacement || setCliniqueEmplacement != null && setCliniqueEmplacement !== '')
		vals['setCliniqueEmplacement'] = setCliniqueEmplacement;
	var addCliniqueEmplacement = $formulaireValeurs.find('.addCliniqueEmplacement').val();
	if(addCliniqueEmplacement != null && addCliniqueEmplacement !== '')
		vals['addCliniqueEmplacement'] = addCliniqueEmplacement;
	var removeCliniqueEmplacement = $formulaireValeurs.find('.removeCliniqueEmplacement').val();
	if(removeCliniqueEmplacement != null && removeCliniqueEmplacement !== '')
		vals['removeCliniqueEmplacement'] = removeCliniqueEmplacement;

	var valeurCliniqueAdministrateurNom = $formulaireValeurs.find('.valeurCliniqueAdministrateurNom').val();
	if(valeurCliniqueAdministrateurNom != null && valeurCliniqueAdministrateurNom !== '')
	var removeCliniqueAdministrateurNom = $formulaireFiltres.find('.removeCliniqueAdministrateurNom').val() === 'true';
	var setCliniqueAdministrateurNom = removeCliniqueAdministrateurNom ? null : $formulaireValeurs.find('.setCliniqueAdministrateurNom').val();
	if(removeCliniqueAdministrateurNom || setCliniqueAdministrateurNom != null && setCliniqueAdministrateurNom !== '')
		vals['setCliniqueAdministrateurNom'] = setCliniqueAdministrateurNom;
	var addCliniqueAdministrateurNom = $formulaireValeurs.find('.addCliniqueAdministrateurNom').val();
	if(addCliniqueAdministrateurNom != null && addCliniqueAdministrateurNom !== '')
		vals['addCliniqueAdministrateurNom'] = addCliniqueAdministrateurNom;
	var removeCliniqueAdministrateurNom = $formulaireValeurs.find('.removeCliniqueAdministrateurNom').val();
	if(removeCliniqueAdministrateurNom != null && removeCliniqueAdministrateurNom !== '')
		vals['removeCliniqueAdministrateurNom'] = removeCliniqueAdministrateurNom;

	var valeurCliniqueMailDe = $formulaireValeurs.find('.valeurCliniqueMailDe').val();
	if(valeurCliniqueMailDe != null && valeurCliniqueMailDe !== '')
	var removeCliniqueMailDe = $formulaireFiltres.find('.removeCliniqueMailDe').val() === 'true';
	var setCliniqueMailDe = removeCliniqueMailDe ? null : $formulaireValeurs.find('.setCliniqueMailDe').val();
	if(removeCliniqueMailDe || setCliniqueMailDe != null && setCliniqueMailDe !== '')
		vals['setCliniqueMailDe'] = setCliniqueMailDe;
	var addCliniqueMailDe = $formulaireValeurs.find('.addCliniqueMailDe').val();
	if(addCliniqueMailDe != null && addCliniqueMailDe !== '')
		vals['addCliniqueMailDe'] = addCliniqueMailDe;
	var removeCliniqueMailDe = $formulaireValeurs.find('.removeCliniqueMailDe').val();
	if(removeCliniqueMailDe != null && removeCliniqueMailDe !== '')
		vals['removeCliniqueMailDe'] = removeCliniqueMailDe;

	var valeurCliniqueMailA = $formulaireValeurs.find('.valeurCliniqueMailA').val();
	if(valeurCliniqueMailA != null && valeurCliniqueMailA !== '')
	var removeCliniqueMailA = $formulaireFiltres.find('.removeCliniqueMailA').val() === 'true';
	var setCliniqueMailA = removeCliniqueMailA ? null : $formulaireValeurs.find('.setCliniqueMailA').val();
	if(removeCliniqueMailA || setCliniqueMailA != null && setCliniqueMailA !== '')
		vals['setCliniqueMailA'] = setCliniqueMailA;
	var addCliniqueMailA = $formulaireValeurs.find('.addCliniqueMailA').val();
	if(addCliniqueMailA != null && addCliniqueMailA !== '')
		vals['addCliniqueMailA'] = addCliniqueMailA;
	var removeCliniqueMailA = $formulaireValeurs.find('.removeCliniqueMailA').val();
	if(removeCliniqueMailA != null && removeCliniqueMailA !== '')
		vals['removeCliniqueMailA'] = removeCliniqueMailA;

	var valeurCliniqueNumeroTelephone = $formulaireValeurs.find('.valeurCliniqueNumeroTelephone').val();
	if(valeurCliniqueNumeroTelephone != null && valeurCliniqueNumeroTelephone !== '')
	var removeCliniqueNumeroTelephone = $formulaireFiltres.find('.removeCliniqueNumeroTelephone').val() === 'true';
	var setCliniqueNumeroTelephone = removeCliniqueNumeroTelephone ? null : $formulaireValeurs.find('.setCliniqueNumeroTelephone').val();
	if(removeCliniqueNumeroTelephone || setCliniqueNumeroTelephone != null && setCliniqueNumeroTelephone !== '')
		vals['setCliniqueNumeroTelephone'] = setCliniqueNumeroTelephone;
	var addCliniqueNumeroTelephone = $formulaireValeurs.find('.addCliniqueNumeroTelephone').val();
	if(addCliniqueNumeroTelephone != null && addCliniqueNumeroTelephone !== '')
		vals['addCliniqueNumeroTelephone'] = addCliniqueNumeroTelephone;
	var removeCliniqueNumeroTelephone = $formulaireValeurs.find('.removeCliniqueNumeroTelephone').val();
	if(removeCliniqueNumeroTelephone != null && removeCliniqueNumeroTelephone !== '')
		vals['removeCliniqueNumeroTelephone'] = removeCliniqueNumeroTelephone;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
	var removeCliniqueAddresse = $formulaireFiltres.find('.removeCliniqueAddresse').val() === 'true';
	var setCliniqueAddresse = removeCliniqueAddresse ? null : $formulaireValeurs.find('.setCliniqueAddresse').val();
	if(removeCliniqueAddresse || setCliniqueAddresse != null && setCliniqueAddresse !== '')
		vals['setCliniqueAddresse'] = setCliniqueAddresse;
	var addCliniqueAddresse = $formulaireValeurs.find('.addCliniqueAddresse').val();
	if(addCliniqueAddresse != null && addCliniqueAddresse !== '')
		vals['addCliniqueAddresse'] = addCliniqueAddresse;
	var removeCliniqueAddresse = $formulaireValeurs.find('.removeCliniqueAddresse').val();
	if(removeCliniqueAddresse != null && removeCliniqueAddresse !== '')
		vals['removeCliniqueAddresse'] = removeCliniqueAddresse;

	var valeurAnneeCles = $formulaireValeurs.find('.valeurAnneeCles').val();
	if(valeurAnneeCles != null && valeurAnneeCles !== '')
	var removeAnneeCles = $formulaireFiltres.find('.removeAnneeCles').val() === 'true';
	var setAnneeCles = removeAnneeCles ? null : $formulaireValeurs.find('.setAnneeCles').val();
	if(removeAnneeCles || setAnneeCles != null && setAnneeCles !== '')
		vals['setAnneeCles'] = setAnneeCles;
	var addAnneeCles = $formulaireValeurs.find('.addAnneeCles').val();
	if(addAnneeCles != null && addAnneeCles !== '')
		vals['addAnneeCles'] = addAnneeCles;
	var removeAnneeCles = $formulaireValeurs.find('.removeAnneeCles').val();
	if(removeAnneeCles != null && removeAnneeCles !== '')
		vals['removeAnneeCles'] = removeAnneeCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
	var removeInheritPk = $formulaireFiltres.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
	var removeObjetTitre = $formulaireFiltres.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	patchCliniqueMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchCliniqueMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCliniqueMailDe = $formulaireFiltres.find('.valeurCliniqueMailDe').val();
		if(filtreCliniqueMailDe != null && filtreCliniqueMailDe !== '')
			filtres.push({ name: 'fq', value: 'cliniqueMailDe:' + filtreCliniqueMailDe });

		var filtreCliniqueMailA = $formulaireFiltres.find('.valeurCliniqueMailA').val();
		if(filtreCliniqueMailA != null && filtreCliniqueMailA !== '')
			filtres.push({ name: 'fq', value: 'cliniqueMailA:' + filtreCliniqueMailA });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreGroupeAgeCles = $formulaireFiltres.find('.valeurGroupeAgeCles').val();
		if(filtreGroupeAgeCles != null && filtreGroupeAgeCles !== '')
			filtres.push({ name: 'fq', value: 'groupeAgeCles:' + filtreGroupeAgeCles });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
		if(filtreEnfantCles != null && filtreEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtreCliniqueNomCourt = $formulaireFiltres.find('.valeurCliniqueNomCourt').val();
		if(filtreCliniqueNomCourt != null && filtreCliniqueNomCourt !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomCourt:' + filtreCliniqueNomCourt });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });
	}
	return filtres;
}

function patchCliniqueMedicaleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchCliniqueMedicaleVals(filtres, vals, success, error);
}

function patchCliniqueMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/clinique?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getCliniqueMedicale(pk) {
	$.ajax({
		url: '/api/clinique/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheCliniqueMedicale($formulaireFiltres, success, error) {
	var filtres = rechercheCliniqueMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheCliniqueMedicaleVals(filtres, success, error);
}

function rechercheCliniqueMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCliniqueMailDe = $formulaireFiltres.find('.valeurCliniqueMailDe').val();
		if(filtreCliniqueMailDe != null && filtreCliniqueMailDe !== '')
			filtres.push({ name: 'fq', value: 'cliniqueMailDe:' + filtreCliniqueMailDe });

		var filtreCliniqueMailA = $formulaireFiltres.find('.valeurCliniqueMailA').val();
		if(filtreCliniqueMailA != null && filtreCliniqueMailA !== '')
			filtres.push({ name: 'fq', value: 'cliniqueMailA:' + filtreCliniqueMailA });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreGroupeAgeCles = $formulaireFiltres.find('.valeurGroupeAgeCles').val();
		if(filtreGroupeAgeCles != null && filtreGroupeAgeCles !== '')
			filtres.push({ name: 'fq', value: 'groupeAgeCles:' + filtreGroupeAgeCles });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
		if(filtreEnfantCles != null && filtreEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtreCliniqueNomCourt = $formulaireFiltres.find('.valeurCliniqueNomCourt').val();
		if(filtreCliniqueNomCourt != null && filtreCliniqueNomCourt !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomCourt:' + filtreCliniqueNomCourt });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });
	}
	return filtres;
}

function rechercheCliniqueMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/clinique?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereCliniqueMedicaleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-clinic ');
			var $span = $('<span>').attr('class', '').text(o['cliniqueNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherCliniqueMedicaleVals($formulaireFiltres, success, error);
}

// PUTImport //

async function putimportCliniqueMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportCliniqueMedicaleVals(JSON.parse(json), success, error);
}

function putimportCliniqueMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/clinique/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionCliniqueMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionCliniqueMedicaleVals(JSON.parse(json), success, error);
}

function putfusionCliniqueMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/clinique/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieCliniqueMedicale($formulaireValeurs, pk, success, error) {
	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurCliniqueNom = $formulaireValeurs.find('.valeurCliniqueNom').val();
	if(valeurCliniqueNom != null && valeurCliniqueNom !== '')
		vals['cliniqueNom'] = valeurCliniqueNom;

	var valeurCliniqueEmplacement = $formulaireValeurs.find('.valeurCliniqueEmplacement').val();
	if(valeurCliniqueEmplacement != null && valeurCliniqueEmplacement !== '')
		vals['cliniqueEmplacement'] = valeurCliniqueEmplacement;

	var valeurCliniqueAdministrateurNom = $formulaireValeurs.find('.valeurCliniqueAdministrateurNom').val();
	if(valeurCliniqueAdministrateurNom != null && valeurCliniqueAdministrateurNom !== '')
		vals['cliniqueAdministrateurNom'] = valeurCliniqueAdministrateurNom;

	var valeurCliniqueMailDe = $formulaireValeurs.find('.valeurCliniqueMailDe').val();
	if(valeurCliniqueMailDe != null && valeurCliniqueMailDe !== '')
		vals['cliniqueMailDe'] = valeurCliniqueMailDe;

	var valeurCliniqueMailA = $formulaireValeurs.find('.valeurCliniqueMailA').val();
	if(valeurCliniqueMailA != null && valeurCliniqueMailA !== '')
		vals['cliniqueMailA'] = valeurCliniqueMailA;

	var valeurCliniqueNumeroTelephone = $formulaireValeurs.find('.valeurCliniqueNumeroTelephone').val();
	if(valeurCliniqueNumeroTelephone != null && valeurCliniqueNumeroTelephone !== '')
		vals['cliniqueNumeroTelephone'] = valeurCliniqueNumeroTelephone;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
		vals['cliniqueAddresse'] = valeurCliniqueAddresse;

	var valeurAnneeCles = $formulaireValeurs.find('.valeurAnneeCles').val();
	if(valeurAnneeCles != null && valeurAnneeCles !== '')
		vals['anneeCles'] = valeurAnneeCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	putcopieCliniqueMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieCliniqueMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/clinique/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

async function websocketCliniqueMedicale(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketCliniqueMedicale', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-clinic w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier écoles');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pink ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});
	}
}
async function websocketCliniqueMedicaleInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherCliniqueMedicaleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputCliniqueMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputCliniqueMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'Modifie'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputCliniqueMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputCliniqueMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'Supprime'));
			}
			var val = o['cliniqueNom'];
			if(vars.includes('cliniqueNom')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueNom'));
			}
			var val = o['cliniqueEmplacement'];
			if(vars.includes('cliniqueEmplacement')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueEmplacement'));
			}
			var val = o['cliniqueAdministrateurNom'];
			if(vars.includes('cliniqueAdministrateurNom')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueAdministrateurNom'));
			}
			var val = o['cliniqueMailDe'];
			if(vars.includes('cliniqueMailDe')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueMailDe').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueMailDe').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueMailDe'));
			}
			var val = o['cliniqueMailA'];
			if(vars.includes('cliniqueMailA')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueMailA').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueMailA').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueMailA'));
			}
			var val = o['cliniqueNumeroTelephone'];
			if(vars.includes('cliniqueNumeroTelephone')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueNumeroTelephone'));
			}
			var val = o['cliniqueAddresse'];
			if(vars.includes('cliniqueAddresse')) {
				$('.inputCliniqueMedicale' + pk + 'CliniqueAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'CliniqueAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'CliniqueAddresse'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputCliniqueMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputCliniqueMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputCliniqueMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputCliniqueMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCliniqueMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputCliniqueMedicale' + pk + 'UtilisateurCle'));
			}
		});
	}
}
